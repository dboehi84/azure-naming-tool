
import { useState } from 'react';

export default function AzureNamingTool() {
  const [company, setCompany] = useState('contoso');
  const [env, setEnv] = useState('dev');
  const [region, setRegion] = useState('westeurope');
  const [type, setType] = useState('vm');
  const [desc, setDesc] = useState('web-01');

  const resourceName = `${company}-${env}-${region}-${type}-${desc}`;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow bg-gray-50">
      <h1 className="text-xl font-bold mb-4">Azure Naming Tool</h1>

      <label className="block">
        Unternehmen/Kürzel:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </label>

      <label className="block mt-4">
        Umgebung:
        <select
          value={env}
          onChange={(e) => setEnv(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
        >
          <option value="dev">dev</option>
          <option value="test">test</option>
          <option value="qa">qa</option>
          <option value="prod">prod</option>
        </select>
      </label>

      <label className="block mt-4">
        Region:
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
        >
          <option value="westeurope">westeurope</option>
          <option value="eastus">eastus</option>
          <option value="germanywestcentral">germanywestcentral</option>
        </select>
      </label>

      <label className="block mt-4">
        Ressourcentyp:
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
        >
          <option value="vm">Virtual Machine (vm)</option>
          <option value="rg">Resource Group (rg)</option>
          <option value="appsvc">App Service (appsvc)</option>
          <option value="sql">SQL Database (sql)</option>
          <option value="st">Storage (st)</option>
          <option value="vnet">Virtual Network (vnet)</option>
        </select>
      </label>

      <label className="block mt-4">
        Beschreibung/Nummer:
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </label>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <strong>Generierter Name:</strong>
        <div className="mt-2 font-mono text-lg">{resourceName}</div>
      </div>

      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => navigator.clipboard.writeText(resourceName)}
      >
        Name Kopieren
      </button>
    </div>
  );
}
