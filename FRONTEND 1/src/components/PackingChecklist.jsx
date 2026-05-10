import React, { useState } from 'react';

const PackingChecklist = () => {
  const [items, setItems] = useState([
    { id: 1, category: 'Documents', name: 'Passport', packed: true },
    { id: 2, category: 'Documents', name: 'Flight Tickets', packed: true },
    { id: 3, category: 'Documents', name: 'Hotel Reservations', packed: false },
    { id: 4, category: 'Clothing', name: 'Comfortable Shoes', packed: true },
    { id: 5, category: 'Clothing', name: 'Jackets', packed: true },
    { id: 6, category: 'Electronics', name: 'Universal Adapter', packed: true },
    { id: 7, category: 'Electronics', name: 'Power Bank', packed: false },
  ]);

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  };

  const packedCount = items.filter(i => i.packed).length;
  const totalCount = items.length;
  const progress = (packedCount / totalCount) * 100;

  const categories = ['Documents', 'Clothing', 'Electronics'];

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
      <main className="flex-grow w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <header className="mb-6">
          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-background mb-4">Trip: Paris & Rome Adventure</h1>
          <div className="bg-surface-container-highest rounded-lg p-6 raised border border-outline-variant/30 relative overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <span className="font-h3 text-h3 text-on-surface">Packing Progress</span>
              <span className="font-label-sm text-label-sm text-primary uppercase">{packedCount}/{totalCount} items packed</span>
            </div>
            <div className="w-full h-6 bg-surface-dim rounded-full inset-input relative overflow-hidden">
              <div 
                className="h-full bg-primary raised absolute left-0 top-0 transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </header>

        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-primary text-on-primary font-interactive text-interactive px-6 py-3 rounded-lg raised hover:scale-105 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add Item
          </button>
          <button className="bg-surface text-on-surface font-interactive text-interactive px-6 py-3 rounded-lg raised hover:scale-105 transition-all border border-outline-variant/50">
            Reset All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {categories.map((cat) => (
            <div key={cat} className="bg-surface rounded-xl p-6 raised flex flex-col gap-4 border border-outline-variant/20 hover:-rotate-1 transition-transform">
              <h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2 border-b border-outline-variant/30 pb-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {cat === 'Documents' ? 'description' : cat === 'Clothing' ? 'checkroom' : 'devices'}
                </span>
                {cat}
              </h2>
              <div className="flex flex-col gap-3">
                {items.filter(i => i.category === cat).map((item) => (
                  <label key={item.id} className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg inset-input cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={item.packed} 
                      onChange={() => toggleItem(item.id)}
                      className="w-5 h-5 rounded text-primary border-outline focus:ring-primary inset-input"
                    />
                    <span className={`font-body text-body transition-colors ${item.packed ? 'text-on-surface-variant line-through' : 'text-on-surface'}`}>
                      {item.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PackingChecklist;
