import { useState } from 'react';
import { RegionSelector } from './RegionSelector';
import { ResourceTypeSelector } from './ResourceTypeSelector';

export default function AzureNamingTool() {
  const [company, setCompany] = useState('contoso');
  const [env, setEnv] = useState('prod');
  const [region, setRegion] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('web01');
  const resourceName = `${company}-${env}-${region}-${type}-${desc}`;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Azure Naming Tool</h1>
      <label className="block mb-2">Company:</label>
      <input className="border p-2 w-full mb-4" value={company} onChange={e => setCompany(e.target.value)} />
      <label className="block mb-2">Environment:</label>
      <select className="border p-2 w-full mb-4" value={env} onChange={e => setEnv(e.target.value)}>
        <option value="dev">dev</option><option value="test">test</option><option value="prod">prod</option>
      </select>
      <label className="block mb-2">Region:</label>
      <RegionSelector selectedRegion={region} setSelectedRegion={setRegion} />
      <label className="block mt-4 mb-2">Ressourcentyp:</label>
      <ResourceTypeSelector selectedType={type} setSelectedType={setType} />
      <label className="block mt-4 mb-2">Description:</label>
      <input className="border p-2 w-full mb-4" value={desc} onChange={e => setDesc(e.target.value)} />
      <div className="mt-4 p-2 bg-gray-100 border rounded"><strong>Generated Name:</strong><br /><code>{resourceName}</code></div>
    </div>
  );
}