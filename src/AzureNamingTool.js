
import { useState } from 'react';

const azureRegions = {
  "eastus": "East US",
  "eastus2": "East US 2",
  "southcentralus": "South Central US",
  "westus2": "West US 2",
  "westus3": "West US 3",
  "australiaeast": "Australia East",
  "australiasoutheast": "Australia Southeast",
  "australiacentral": "Australia Central",
  "southeastasia": "Southeast Asia",
  "eastasia": "East Asia",
  "northeurope": "North Europe",
  "westeurope": "West Europe",
  "uksouth": "UK South",
  "ukwest": "UK West",
  "centralus": "Central US",
  "northcentralus": "North Central US",
  "westcentralus": "West Central US",
  "canadacentral": "Canada Central",
  "canadaeast": "Canada East",
  "francecentral": "France Central",
  "francesouth": "France South",
  "germanywestcentral": "Germany West Central",
  "germanynorth": "Germany North",
  "norwayeast": "Norway East",
  "norwaywest": "Norway West",
  "swedencentral": "Sweden Central",
  "switzerlandnorth": "Switzerland North",
  "switzerlandwest": "Switzerland West",
  "japaneast": "Japan East",
  "japanwest": "Japan West",
  "koreacentral": "Korea Central",
  "koreasouth": "Korea South",
  "southafricanorth": "South Africa North",
  "southafricawest": "South Africa West",
  "brazilsouth": "Brazil South",
  "brazilsoutheast": "Brazil Southeast",
  "indiacentral": "India Central",
  "indiawest": "India West",
  "indiasouth": "India South",
  "uaenorth": "UAE North",
  "uaecentral": "UAE Central",
  "israelcentral": "Israel Central",
  "qatarcentral": "Qatar Central"
};

const azureResourceTypes = {
  "Virtual Machine": "vm",
  "Resource Group": "rg",
  "App Service": "appsvc",
  "SQL Database": "sql",
  "Storage Account": "st",
  "Virtual Network": "vnet",
  "Network Interface": "nic",
  "Public IP Address": "pip",
  "Load Balancer": "lb",
  "Application Gateway": "agw",
  "Azure Kubernetes Service": "aks",
  "Azure Function": "func",
  "Cosmos DB": "cosmos",
  "Key Vault": "kv",
  "Azure Container Registry": "acr",
  "Azure Data Factory": "adf",
  "Azure Synapse Analytics": "syn",
  "Azure Monitor": "am",
  "Log Analytics Workspace": "law",
  "Application Insights": "ai",
  "Azure Firewall": "afw",
  "Bastion Host": "bas",
  "Azure DNS Zone": "dns",
  "Azure Front Door": "afd",
  "Azure API Management": "apim",
  "Azure Service Bus": "sb",
  "Event Hub": "eh",
  "Azure Cache for Redis": "redis",
  "Azure Search": "srch",
  "Azure Cognitive Services": "cog",
  "Azure Machine Learning": "ml",
  "Azure DevOps": "ado",
  "Azure Logic Apps": "logic",
  "Azure Media Services": "ams",
  "Azure Site Recovery": "asr",
  "Azure Backup": "ab",
  "Azure Automation": "aa",
  "Azure Batch": "batch",
  "Azure Databricks": "db",
  "Azure HDInsight": "hdinsight",
  "Azure IoT Hub": "iot",
  "Azure Time Series Insights": "tsi",
  "Azure Virtual Desktop": "avd",
  "Azure VPN Gateway": "vpngw",
  "Azure ExpressRoute": "er",
  "Azure Route Table": "rt",
  "Azure NAT Gateway": "nat",
  "Azure Application Security Group": "asg",
  "Azure Network Security Group": "nsg",
  "Azure Traffic Manager": "tm",
  "Azure Load Testing": "lt",
  "Azure Managed Identity": "mi",
  "Azure Policy": "pol",
  "Azure Blueprints": "bp",
  "Azure Resource Graph": "arg",
  "Azure Sentinel": "sentinel",
  "Azure Security Center": "asc",
  "Azure Advisor": "adv",
  "Azure Cost Management": "cost",
  "Azure Lighthouse": "light",
  "Azure Arc": "arc",
  "Azure Stack": "stack",
  "Azure VMware Solution": "avs",
  "Azure NetApp Files": "anf",
  "Azure Files": "afiles",
  "Azure Blob Storage": "blob",
  "Azure Queue Storage": "queue",
  "Azure Table Storage": "table",
  "Azure Disk Storage": "disk"
};

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
          {Object.entries(azureRegions).map(([code, label]) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="block mt-4">
        Ressourcentyp:
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full border rounded-md p-2"
        >
          {Object.entries(azureResourceTypes).map(([name, abbreviation]) => (
            <option key={abbreviation} value={abbreviation}>
              {name}
            </option>
          ))}
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
      <div className="mt-10 bg-white p-6 rounded-xl shadow border">
        <h2 className="text-lg font-semibold mb-2">Namenskonzept</h2>
        <p className="text-sm text-gray-700">
          Diese Anwendung generiert standardisierte Ressourcennamen für Azure-Projekte. Die Namen folgen einem festen Schema:
        </p>
        <p className="mt-2 font-mono text-sm text-blue-700">
          [Firmenkürzel]-[Umgebung]-[Region]-[Ressourcentyp]-[Beschreibung]
        </p>
        <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
          <li><strong>Firmenkürzel</strong>: z. B. <code>contoso</code> – eindeutige Zuordnung zum Unternehmen oder Projekt</li>
          <li><strong>Umgebung</strong>: <code>dev</code>, <code>test</code>, <code>qa</code>, <code>prod</code></li>
          <li><strong>Region</strong>: Azure-Region wie <code>westeurope</code> oder <code>eastus</code></li>
          <li><strong>Ressourcentyp</strong>: Abkürzung, z. B. <code>vm</code> für Virtual Machine oder <code>rg</code> für Resource Group</li>
          <li><strong>Beschreibung</strong>: Freitext, z. B. <code>web01</code>, <code>db02</code> usw.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-700">
          Diese Konvention erleichtert die Verwaltung, Automatisierung und Kostenanalyse in größeren Azure-Umgebungen.
        </p>
      </div>
    </div>
    
  );
}
