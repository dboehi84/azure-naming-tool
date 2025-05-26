import { Combobox } from '@headlessui/react';
import { useState } from 'react';
import resourceTypes from './azureResourceTypes.js';

export function ResourceTypeSelector({ selectedType, setSelectedType }) {
  const [query, setQuery] = useState('');
  const filtered = query === '' ? Object.entries(resourceTypes) : Object.entries(resourceTypes).filter(([name]) => name.toLowerCase().includes(query.toLowerCase()));
  return (
    <Combobox value={selectedType} onChange={setSelectedType}>
      <div className="relative">
        <Combobox.Input className="w-full border p-2 rounded" onChange={(e) => setQuery(e.target.value)} displayValue={(key) => Object.entries(resourceTypes).find(([k, v]) => v === key)?.[0] || ''} placeholder="Suche Ressourcentyp..." />
        <Combobox.Options className="absolute mt-1 w-full border rounded bg-white z-10 max-h-60 overflow-auto shadow">
          {filtered.map(([name, value]) => (
            <Combobox.Option key={value} value={value} className="p-2 hover:bg-blue-100 cursor-pointer">{name}</Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}