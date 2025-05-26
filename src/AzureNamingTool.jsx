
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

      <div className="mt-10 bg-white p-6 rounded-xl shadow border">
        <h2 className="text-lg font-semibold mb-2">Namenskonzept – Aufbau</h2>
        <p className="text-sm text-gray-700 mb-2">Diese App generiert standardisierte Ressourcennamen für Azure-Projekte nach folgendem Schema:</p>
        <p className="font-mono text-sm text-blue-700 mb-4">[firmenkürzel]-[umgebung]-[region]-[ressourcentyp]-[beschreibung]</p>
        <table className="text-sm text-left w-full mb-4">
          <thead><tr><th className="font-semibold pr-4">Komponente</th><th>Beschreibung</th></tr></thead>
          <tbody>
            <tr><td className="pr-4">firmenkürzel</td><td>Kürzel für Organisation oder Projekt (z. B. contoso)</td></tr>
            <tr><td className="pr-4">umgebung</td><td>dev, test, qa oder prod</td></tr>
            <tr><td className="pr-4">region</td><td>Azure-Region (z. B. westeurope, eastus)</td></tr>
            <tr><td className="pr-4">ressourcentyp</td><td>Kurzbezeichnung (z. B. vm, st, rg)</td></tr>
            <tr><td className="pr-4">beschreibung</td><td>z. B. web01 oder db02</td></tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-700 mb-1"><strong>Beispiel:</strong></p>
        <p className="font-mono text-sm mb-4">contoso-prod-westeurope-vm-web01</p>
        <p className="text-sm text-gray-700">Einheitliche Namen vereinfachen die Verwaltung, Automatisierung und Analyse in Azure.</p>
      </div>
    </div>
  );
}
