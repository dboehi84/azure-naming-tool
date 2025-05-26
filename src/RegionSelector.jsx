import { Combobox } from '@headlessui/react';
import { useState } from 'react';
import regions from './azureRegions.js';

export function RegionSelector({ selectedRegion, setSelectedRegion }) {
  const [query, setQuery] = useState('');
  const filtered = query === '' ? Object.entries(regions) : Object.entries(regions).filter(([_, name]) => name.toLowerCase().includes(query.toLowerCase()));
  return (
    <Combobox value={selectedRegion} onChange={setSelectedRegion}>
      <div className="relative">
        <Combobox.Input className="w-full border p-2 rounded" onChange={(e) => setQuery(e.target.value)} displayValue={(code) => regions[code] || ''} placeholder="Suche Region..." />
        <Combobox.Options className="absolute mt-1 w-full border rounded bg-white z-10 max-h-60 overflow-auto shadow">
          {filtered.map(([code, name]) => (
            <Combobox.Option key={code} value={code} className="p-2 hover:bg-blue-100 cursor-pointer">{name}</Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}