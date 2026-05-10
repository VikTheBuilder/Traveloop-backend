import React from 'react';

const CommunityTab = () => {
  const posts = [
    {
      id: 1,
      user: 'Sarah J.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYza3o1DLcN2LgrqWijVAmCOv5k7CCr6nV9ggdM68PkicU_HzgWnIwru5JtkqMyLqzphlEup5bTPdpGgsZ84dPeSh95bCIziwKa1UUb4O2bC-N6Fzd3higjjqNF82NRytLY1HjzXE4cxB1Rvjqwre0ezv5lKGInqQoS1GX0NxEzUH1YyIuMhDs-rhvpjXpNco1E4bG1AJl-NjTUCTikzJRhC8yW4rjRHPfy4AWtZWZiaGnqeFw0XrxxacVDO_8V-T4wFCnHdaXVEE',
      time: '2 hours ago',
      title: 'Hidden beaches in Bali',
      content: 'Just discovered this amazing secluded spot away from the tourist crowds. The water is incredibly clear, perfect for snorkeling!',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBplqWmx9iHHwJzALjs224Zbl3e85UNLdvNgeY0XsIWs_2CpWLyw3qbZ_4LY279XvSY7859-JTyIwP4pSCvQqQkXjJ2tIU_JxVBr_7VGJg8TQi5IASxEcCCmVwRW-_M3kUaxNwyqibFD2fFlMTzPbmGEt907zJ5Oc8H8Ucszitkny2osIP391vvkWndwPpmumDFrGf1GzmbDhMVWQQToBOup6oa6UmYsAmr1NhPOgqNXYfx4CHYhILrGUvXA5ZEjTY6umbcMIyT9Q8',
      tags: ['#BALI', '#BEACH'],
      likes: 245,
      comments: 42
    },
    {
      id: 2,
      user: 'Mike T.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDenv8ojzXmJ_9We1M3OdFnFCyIpiiQO3TPELh1164GZgo25l26rkbZ38Qq0JwSWjU6qcs09ousq5-th28P4EXTdi4B5H81oSKcHhMd_dhBbyUqaQ_KLL0RgseVfTI_Z5ZcB8p99CIut2hscNd234b2O-_B7ADGVdRPt0tqtKtmfd978gZoXXWtq_UJINLcpvWBBUXZk3YMno4p3PzOlBlxJZSk1ac0bjgGBppeCFut5opR_0lrGX6H4Qj4cErv0-oYBrL2f1E9cLU',
      time: '5 hours ago',
      title: 'Packing list for 2 weeks in Europe',
      content: "I've compiled the ultimate minimalist packing list for a multi-city European tour during autumn. Layers are key!",
      list: ['Merino wool base layers', 'Lightweight waterproof jacket', 'Comfortable walking shoes', 'Universal adapter'],
      tags: ['#TIPS', '#EUROPE'],
      likes: 89,
      comments: 15
    }
  ];

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
      <main className="flex-grow w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-8 md:py-12">
        <header className="mb-10 text-center md:text-left">
          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-surface mb-2">Community Tab</h1>
          <p className="font-body text-body text-on-surface-variant max-w-2xl">Connect with fellow travelers and discover hidden gems.</p>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 p-4 bg-surface-container rounded-lg raised-card">
          <div className="relative w-full md:w-auto flex-grow md:max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="inset-input w-full bg-surface rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary border-none" placeholder="Search community posts..." type="text"/>
          </div>
          <div className="flex items-center gap-2">
            <button className="raised-button bg-surface flex items-center gap-2 px-4 py-2 rounded-md text-sm font-interactive">
              <span className="material-symbols-outlined text-sm">filter_list</span> Filter
            </button>
            <button className="raised-button bg-surface flex items-center gap-2 px-4 py-2 rounded-md text-sm font-interactive">
              <span className="material-symbols-outlined text-sm">sort</span> Sort
            </button>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="raised-card bg-surface rounded-xl overflow-hidden break-inside-avoid perspective-1000">
              {post.image && <img alt={post.title} className="w-full h-48 object-cover" src={post.image} />}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img alt={post.user} className="w-8 h-8 rounded-full object-cover" src={post.avatar} />
                  <div>
                    <p className="font-interactive text-interactive text-on-surface font-semibold">{post.user}</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{post.time}</p>
                  </div>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-2 text-lg">{post.title}</h3>
                <p className="font-body text-body text-on-surface-variant text-sm mb-4">{post.content}</p>
                {post.list && (
                  <ul className="text-sm text-on-surface-variant space-y-1 list-disc pl-4 mb-4">
                    {post.list.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )}
                <div className="flex gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="inset-input bg-surface-container-high px-2 py-1 rounded font-label-sm text-label-sm text-secondary tracking-wide">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-outline-variant/30 pt-3">
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm">favorite</span>
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm">chat_bubble</span>
                      <span className="text-sm">{post.comments}</span>
                    </button>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CommunityTab;
