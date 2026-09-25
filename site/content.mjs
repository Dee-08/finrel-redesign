// Primary source: supplied Finrel company brief. Reviewed against the existing website 2026-09-24.
// Update business facts here, then run npm run build. Never infer branch service availability.
export const company = {
  name: 'Finrel Nigeria Limited', care: '0813 707 2624', careTel: '+2348137072624',
  office: 'No. 7, Akobo Housing Estate, General Gas, Ibadan, Oyo State, Nigeria.',
  officePhone: '08174993652', officeTel: '+2348174993652',
  shop: 'https://finrelonline.com/', appointment: 'https://finrelpharmacy.com/?page_id=954',
  // Recheck the external store before changing this: DNS lookup failed on 25 September 2026.
  shopAvailable: false,
  logo: 'finrels-logo.png', favicon: 'finrels-logo-Fav-1.png',
  socials: [{label:'Instagram',url:'https://www.instagram.com/finrelpharmacy/'},{label:'Facebook',url:'https://www.facebook.com/finrelpharmacy1'}],
  founded: 2014, opened: '1 August 2015',
  vision: 'To be number one in every community we serve.',
  mission: 'To take retail business to everywhere there is a need, providing the community with the best prices and best services that exceed customer expectations.',
  values: ['Honesty','Trust','Passion for excellent customer service']
};
export const navigation = [{label:'Home',url:'/'},{label:'About',url:'/about/'},{label:'Services',url:'/services/'},{label:'Veterinary',url:'/veterinary/'},{label:'Branches',url:'/branches/'},{label:'Contact',url:'/contact/'}];
export const branches = [
  {id:'ojurin-akobo',name:'Ojurin Akobo',area:'Akobo',address:'Ojurin Akobo, Ibadan, Nigeria.',phone:'08066009582',image:'SAM_1512-495x400.jpg'},
  {id:'olomi',name:'Olomi',area:'Olomi',address:'Cooperative Bus Stop, Olomi Academy Area, Ibadan, Nigeria.',phone:'08165133061',image:'IMG-20220607-WA0003-e1654775689487-300x292.jpg'},
  {id:'alakia',name:'Alakia',area:'Alakia',address:'Salau Bus Stop, Old Ife Road, Alakia, Ibadan, Nigeria.',phone:'08109204019',image:'SAM_1442-495x400.jpg'},
  {id:'asolo',name:'Asolo',area:'Olorunsogo',address:'Asolo Area, Akaran Road, Olorunsogo, Ibadan, Nigeria.',phone:'08149781308',image:'IMG-20220223-WA0007-845x684.jpg'},
  {id:'adegbayi',name:'Adegbayi',area:'Adegbayi',address:'KM 5, New Ife Road, Adegbayi, Ibadan, Nigeria.',phone:'09163114256',image:'IMG-20220609-WA0003-845x684.jpg'},
  {id:'sawia',name:'Sawia',area:'Olorunsogo',address:'Sawia Area, Akanran Road, Olorunsogo, Ibadan, Nigeria.',phone:'09166299447',image:'Finrel-Image-845x684.jpg'},
  {id:'apata',name:'Apata',area:'Apata',address:'After NNPC depot, opposite Zenith Care Hospital, Old Abeokuta Road, Apata, Ibadan.',phone:'07031002058',image:'Finrel-Apata.jpeg'},
  {id:'akala-express',name:'Akala Express',area:'Akala Express',address:'Defellows 2, Elewure Bus Stop, Akala Express, Ibadan.',phone:'08107462168',image:'Finrel-Akala-300x225.jpeg'}
];
export const services = [
  {id:'pharmacy',name:'Pharmacy',tag:'A conversation. A little reassurance.',description:'Medicines and pharmacist support, with care for the quality and suitability of what you take home.',detail:'Our pharmacy commitment starts with the quality of medicines, their lawful supply and the suitability of prescribed medicines. Speak with a pharmacist about your needs and ask your branch about availability.',image:'SAM_1373-1210x423.jpg',alt:'A Finrel pharmacist at the pharmacy counter',cta:'Speak to a pharmacist',href:'/appointments/'},
  {id:'veterinary',name:'Veterinary',tag:'For the ones with paws.',description:'Care for the pets that make your home a little happier.',detail:'Pets are part of the family. Finrel provides veterinary care with the same customer-focused approach that runs through our business. Contact customer care to find the appropriate branch and discuss availability.',image:'VETERINARY-1210x423.jpg',alt:'A black Labrador, from Finrel’s veterinary photography',cta:'Explore veterinary care',href:'/veterinary/'},
  {id:'supermarket',name:'Supermarket',tag:'The things your day calls for.',description:'Everyday essentials, conveniently close to home.',detail:'From your regular shopping list to the things you need along the way, our supermarkets bring daily essentials together. Visit a branch or explore Finrel’s existing online store for current products and availability.',image:'SAM_1429-1210x423.jpg',alt:'Everyday products on the shelves of a Finrel supermarket',cta:'Find your Finrel',href:'/branches/'},
  {id:'bakery',name:'Bakery',tag:'Something fresh. Something lovely.',description:'Fresh oven breads, cakes and more from our in-store bakeries.',detail:'Our in-store bakeries are part of the Finrel story. Contact your branch to ask about today’s breads and cakes, and to discuss an order before visiting.',image:'SAM_1380-1210x423.jpg',alt:'The Finrel bakery team in their bakery uniforms',cta:'Enquire at a branch',href:'/branches/'}
];
export const team = [
  {name:'Pharm. Jaiyesimi Obajimi',role:'CEO / Managing Director',bio:'A pharmacist and MBA degree holder.',image:'c.e.o.jpg'},
  {name:'Late Mrs. Afolake Jaiyesimi',role:'Co-founder',bio:'An accountant and MBA degree holder.'},
  {name:'Pharm. Adeniyi Adekoya',role:'Director'},
  {name:'Engr. Jaiyesimi Olusegun',role:'Director'}
];
export const statistics = [{value:'2015',label:'Our first doors opened'},{value:String(branches.length).padStart(2,'0'),label:'Locations in our directory'},{value:'Ibadan',label:'Our home. Our community.'}];
export const faqs = [
  {question:'How do I request a pharmacist appointment?',answer:'Choose a branch and a preferred date on our appointment page. Your request is handled through Finrel’s existing contact form. Contact the branch to confirm availability; submitting a request does not confirm a booking.'},
  {question:'Can I shop online?',answer:company.shopAvailable?'Visit finrelonline.com, Finrel’s existing store, to check products and delivery arrangements. Call customer care if you need help.':'Our online store is currently unreachable. Use Shop Online for alternative ways to contact Finrel about products and ordering, or call customer care on '+company.care+'.'},
  {question:'Which branch provides veterinary care?',answer:'Please call customer care before travelling so the team can direct you to a suitable branch and confirm veterinary availability.'}
];
export const testimonials = []; // No verified testimonials supplied.
export const claimsPendingReview = ['15,000+ happy customers','9,000+ pets healed','24/7 helpline','10 years serving customers','Current ice cream and yoghurt production'];
