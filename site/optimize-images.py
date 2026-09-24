"""Rebuild responsive image assets from the supplied original Finrel photographs."""
from pathlib import Path
from PIL import Image
import json

assets = Path(__file__).parent / 'dist' / 'assets'
manifest = {}
for source in [*assets.glob('*.jpg'), *assets.glob('*.jpeg')]:
    with Image.open(source) as original:
        original = original.convert('RGB')
        original.thumbnail((1500, 1200))
        original.save(source.with_suffix('.webp'), quality=86, method=6)
        entry = {'width': original.width, 'height': original.height, 'variants': []}
        for width in [480, 800]:
            if original.width > width:
                resized = original.resize((width, round(original.height * width / original.width)), Image.Resampling.LANCZOS)
                name = source.stem + '-' + str(width) + '.webp'
                resized.save(assets / name, quality=85, method=6)
                entry['variants'].append({'file': name, 'width': width})
        manifest[source.name] = entry
(Path(__file__).parent / 'image-manifest.json').write_text(json.dumps(manifest, indent=2))
print('Optimized', len(manifest), 'Finrel photographs with responsive variants.')
