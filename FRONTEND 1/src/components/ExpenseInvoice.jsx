import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExpenseInvoice = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col">
      <main className="flex-1 w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-8 md:py-12 flex flex-col gap-unit">
        {/* Header Actions */}
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 font-interactive text-interactive text-secondary hover:text-primary transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            back to My Trips
          </button>
          <div className="flex gap-3">
            <button className="bg-surface text-primary border border-outline-variant/30 px-4 py-2 rounded-lg font-interactive text-interactive raised hover:scale-105 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download
            </button>
            <button className="bg-surface text-primary border border-outline-variant/30 px-4 py-2 rounded-lg font-interactive text-interactive raised hover:scale-105 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">ios_share</span>
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Main Invoice Area */}
          <div className="lg:col-span-8 flex flex-col gap-gutter">
            <div className="bg-surface rounded-xl p-6 raised flex flex-col md:flex-row justify-between gap-6">
              <div>
                <h1 className="font-h2 text-h2 text-on-surface mb-2">Invoice #INV-2024-089</h1>
                <div className="flex gap-4 font-body text-body text-on-surface-variant">
                  <div>Date: <span className="font-medium">Oct 24, 2024</span></div>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-medium">Paid</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-1">Total Amount</div>
                <div className="font-h1 text-h1 text-primary">$3,450.00</div>
              </div>
            </div>

            <div className="bg-surface rounded-xl raised overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant/30">
                      <th className="p-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider w-12">#</th>
                      <th className="p-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Category</th>
                      <th className="p-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">Description</th>
                      <th className="p-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider text-right">Qty</th>
                      <th className="p-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-body">
                    {[
                      { id: 1, cat: 'Flights', desc: 'Roundtrip SFO to TYO', qty: 2, price: '$1,700.00' },
                      { id: 2, cat: 'Lodging', desc: 'Shinjuku Grand Hotel', qty: 5, price: '$1,000.00' },
                      { id: 3, cat: 'Meals', desc: 'Per Diem Allowance', qty: 5, price: '$500.00' },
                    ].map((row) => (
                      <tr key={row.id} className="border-b border-outline-variant/10 hover:bg-surface-container-lowest transition-colors">
                        <td className="p-4 text-on-surface-variant">{row.id}</td>
                        <td className="p-4"><span className="bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm inset-input">{row.cat}</span></td>
                        <td className="p-4 text-on-surface">{row.desc}</td>
                        <td className="p-4 text-right text-on-surface-variant">{row.qty}</td>
                        <td className="p-4 text-right font-medium text-on-surface">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-surface-container-low p-6 flex flex-col items-end border-t border-outline-variant/30">
                <div className="w-full max-w-sm space-y-3 font-body text-body">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>$3,200.00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Tax (10%)</span>
                    <span>$320.00</span>
                  </div>
                  <div className="border-t border-outline-variant/30 pt-3 flex justify-between font-h3 text-h3 text-on-surface mt-3">
                    <span>Grand Total</span>
                    <span>$3,450.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-gutter">
            <div className="bg-surface rounded-xl p-6 raised flex flex-col gap-4">
              <h3 className="font-h3 text-h3 text-on-surface">Actions</h3>
              <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-interactive text-interactive raised hover:scale-105 transition-all active:scale-95 text-center flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">task_alt</span>
                Mark as paid
              </button>
            </div>
            <div className="bg-surface rounded-xl p-6 raised flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">insights</span>
                <h3 className="font-h3 text-h3 text-on-surface">Budget Insights</h3>
              </div>
              <div className="inset-input bg-surface-container-low rounded-lg p-4">
                <div className="font-label-sm text-label-sm text-secondary mb-1 uppercase tracking-wider">Remaining Budget</div>
                <div className="font-h2 text-h2 text-primary">$1,550.00</div>
                <div className="w-full bg-surface-dim h-2 rounded-full mt-3 overflow-hidden inset-input">
                  <div className="bg-primary h-full w-[65%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExpenseInvoice;
