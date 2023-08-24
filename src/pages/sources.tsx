import React, { useState } from "react";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import SourcesGallery from "../components/sources-gallery";
import SourcesTable from "../components/sources-table";

const WebsitesPage = () => {
  const [activeTab, setActiveTab] = useState('features');  // Default to 'features' view

  return (
    <SiteLayout>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="tabExample" role="tablist">

          <li className="mr-2" role="presentation">
            <button 
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${activeTab === 'features' ? 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500' : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'}`}
              onClick={() => setActiveTab('features')}
              role="tab" 
              aria-selected={activeTab === 'features'}
            >
             <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>Gallery View
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button 
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${activeTab === 'table' ? 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500' : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'}`} 
              onClick={() => setActiveTab('table')}
              role="tab" 
              aria-selected={activeTab === 'table'}
            >
             <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
            <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM9 6v2H2V6h7Zm2 0h7v2h-7V6Zm-9 4h7v2H2v-2Zm9 2v-2h7v2h-7Z"/>
          </svg>
              Table View
            </button>
          </li>
        </ul>
      </div>
      <div>
        {activeTab === 'table' && <SourcesTable />}
        {activeTab === 'features' && <SourcesGallery />}
      </div>
    </SiteLayout>
  );
};

export default WebsitesPage;
