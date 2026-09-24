const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#main-nav');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menu.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){closeMenu();menuButton.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
menu?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});

// Branch filtering operates on rendered data and never needs a remote request.
const search=document.querySelector('#branch-search');
const area=document.querySelector('#area-filter');
function filterBranches(){
  const query=search.value.trim().toLocaleLowerCase();let count=0;
  document.querySelectorAll('[data-branch]').forEach(row=>{const match=row.dataset.search.includes(query)&&(!area.value||row.dataset.area===area.value);row.hidden=!match;if(match)count++;});
  document.querySelector('#branch-count').textContent=`${count} ${count===1?'branch':'branches'} ${query||area.value?'found':'listed'}`;
  document.querySelector('#no-branches').hidden=count>0;
}
if(search){search.addEventListener('input',filterBranches);area.addEventListener('change',filterBranches);document.querySelector('.branch-filters').addEventListener('submit',e=>e.preventDefault());document.querySelector('.branch-filters').addEventListener('reset',()=>{setTimeout(filterBranches,0);});document.querySelector('#clear-search').addEventListener('click',()=>{search.value='';area.value='';filterBranches();search.focus();});}

const topic=document.querySelector('#contact-topic');
if(topic){const requested=new URLSearchParams(location.search).get('topic');if([...topic.options].some(o=>o.value===requested))topic.value=requested;}

const booking=document.querySelector('#booking-form');
if(booking){
  // Own validation across steps so hidden required fields never receive focus.
  booking.noValidate=true;
  let step=1;
  const fieldsets=[...booking.querySelectorAll('[data-step]')];
  const branch=document.querySelector('#booking-branch');
  const date=document.querySelector('#booking-date');
  const time=document.querySelector('#booking-time');
  const now=new Date();const localToday=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  date.min=localToday;
  const requested=new URLSearchParams(location.search).get('branch');if([...branch.options].some(o=>o.value===requested))branch.value=requested;
  function updateBranch(){const option=branch.selectedOptions[0];const panel=document.querySelector('#selected-branch');panel.replaceChildren();const p=document.createElement('p');p.textContent=option.dataset.address||'Choose a branch to see its address and contact number.';panel.append(p);if(option.dataset.phone){const a=document.createElement('a');a.href='tel:+234'+option.dataset.phone.slice(1);a.textContent='Call '+option.dataset.phone;panel.append(a);}}
  function updateRequest(){const chosen=branch.selectedOptions[0];const readable=date.value?new Date(date.value+'T12:00:00').toLocaleDateString('en-NG',{day:'numeric',month:'long',year:'numeric'}):'';const summary=`${chosen.textContent} · Pharmacist consultation · ${readable}${time.value?' at '+time.value:''}`;document.querySelector('#review-summary').textContent=summary;document.querySelector('#booking-subject').value='Pharmacist appointment request — '+chosen.textContent;document.querySelector('#booking-datetime').value=date.value+(time.value?' '+time.value:'');document.querySelector('#booking-message').value=summary+'. Please contact me by email to confirm availability.';}
  function showStep(next){step=next;fieldsets.forEach(f=>{f.hidden=Number(f.dataset.step)!==step;});document.querySelectorAll('.step-progress li').forEach((li,i)=>{if(i===step-1)li.setAttribute('aria-current','step');else li.removeAttribute('aria-current');});updateRequest();const legend=fieldsets[step-1].querySelector('legend');legend.tabIndex=-1;legend.focus();}
  booking.querySelectorAll('.next-step').forEach(button=>button.addEventListener('click',()=>{const fields=[...fieldsets[step-1].querySelectorAll('input,select')];for(const field of fields){if(!field.reportValidity())return;}showStep(Math.min(3,step+1));}));
  booking.querySelectorAll('.back-step').forEach(button=>button.addEventListener('click',()=>showStep(Math.max(1,step-1))));
  booking.addEventListener('submit',e=>{if(step!==3){e.preventDefault();fieldsets[step-1].querySelector('.next-step').click();return;}for(const fieldset of fieldsets){for(const field of fieldset.querySelectorAll('input,select')){if(!field.checkValidity()){e.preventDefault();showStep(Number(fieldset.dataset.step));field.reportValidity();return;}}}if(date.value<localToday){e.preventDefault();showStep(2);date.setCustomValidity('Please choose today or a future date.');date.reportValidity();return;}updateRequest();});
  date.addEventListener('input',()=>date.setCustomValidity(''));
  branch.addEventListener('change',updateBranch);updateBranch();
}
