import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col">
      <main className="flex-grow w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-unit relative">
        {/* Hero Section */}
        <section className="relative w-full h-[614px] min-h-[400px] mt-4 rounded-xl overflow-hidden raised mb-12">
          <img 
            alt="Banner Image" 
            className="w-full h-full object-cover absolute inset-0 z-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMrUoR1VHzrlSza5w94chwDBApslZIqES4k6qz5H2Vd-Oy1euH9DJQghf5Km4D5-qqmBvAXSTUsXkLSpspiQ18V2U1qe-1jdqMnTjKPJ6KcQjqfaiYADozpGCT4ygyRILx55ojumL82kVM7VDrQDvCKE7ZU36XV_HZ3HKqmc6_7kYwIuLIdD1KBV2CxXwUPfVII5EDly6E00uaQoEjwwIWyyWObK1fzxxaNzSAWt1xK6xn88HkksA3XE59FUVSOL3ekIOH-JMbZ38"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent z-10"></div>
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <h1 className="font-h1 text-h1 text-on-surface mb-2 drop-shadow-md">Discover Your Next Adventure</h1>
            <p className="font-body text-body text-on-surface-variant max-w-2xl">Plan, organize, and experience the world with precision and style. Your global command center awaits.</p>
          </div>
        </section>

        {/* Floating Utility Bar */}
        <div className="glass border border-outline-variant/30 rounded-full p-2 mx-auto w-11/12 max-w-4xl flex items-center justify-between gap-4 shadow-lg -mt-20 relative z-30 mb-16 px-4 py-3">
          <div className="flex-grow relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              className="w-full inset bg-surface-container-high border-none rounded-full py-2 pl-10 pr-4 font-body text-body text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200" 
              placeholder="Search destinations, trips, or friends..." 
              type="text"
            />
          </div>
          <div className="flex gap-2">
            <button className="raised bg-surface text-on-surface font-interactive text-interactive px-4 py-2 rounded-full flex items-center gap-2 spring-transition btn-hover btn-active">
              <span className="material-symbols-outlined text-sm">filter_list</span> Filter
            </button>
            <button className="raised bg-surface text-on-surface font-interactive text-interactive px-4 py-2 rounded-full flex items-center gap-2 spring-transition btn-hover btn-active">
              <span className="material-symbols-outlined text-sm">sort</span> Sort by
            </button>
            <button className="raised bg-surface text-on-surface font-interactive text-interactive px-4 py-2 rounded-full flex items-center gap-2 spring-transition btn-hover btn-active hidden md:flex">
              <span className="material-symbols-outlined text-sm">group_work</span> Group by
            </button>
          </div>
        </div>

        {/* Top Regional Selections */}
        <section className="mb-16">
          <h2 className="font-h2 text-h2 mb-6">Top Regional Selections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface rounded-xl raised overflow-hidden card-tilt spring-transition cursor-pointer group">
              <div className="h-48 overflow-hidden">
                <img alt="Rome" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxvEgeDZiKC1VpCzmDzosAoINRJp8f9cbKXTJoGhYsqlmV6CkBqc8t-6tX6nEjpeUfsI19ZlECFgRmYmjvkUod5HPhua1trpvlap67luij3dHa6g92K7ECWU5jnW5matE-7m3sTZuu9AlY2dXhNzHJCPk64BOGBB3uFFfzapuQ4n_lwoNIqiTYeHA51hisCU4HktjD9KpnSRcU1pZgvHYILE5lcUmJWfDNTWYH584aA1YlET9YJpvZrXBVQAV8e-9Ze0V2UIrv0K8"/>
              </div>
              <div className="p-4">
                <h3 className="font-h3 text-h3 mb-1">Rome, Italy</h3>
                <p className="font-body text-body text-on-surface-variant line-clamp-2 mb-3">Ancient history meets modern La Dolce Vita.</p>
                <div className="flex justify-between items-center">
                  <span className="font-label-sm text-label-sm inset bg-surface-container-high px-2 py-1 rounded">Europe</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface rounded-xl raised overflow-hidden card-tilt spring-transition cursor-pointer group">
              <div className="h-48 overflow-hidden">
                <img alt="Kyoto" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaheVDpVjRwGcTP1KoY233xq4Y9W0z1iRByzPSiDQNWdk7I58IwcyiC0ORJMRRoGNu9-YbF2-iChYc8HKDFC-Ir6svGrMRBsopVmo_pQscbUaSRAXaSdNRzdHF2jjvh0K4q-YUR4u3tH0JWs4-cTHbM3RsZqxDfUq0cQcTQblbVMbj2DhPfxgUpRWREpmIXl5HzYABOZAuiwzkz4YEzVK3IpYbbpuTcqF4QcPuaoA-2yjLM8Jhk9BYfU-XzwhdfXBza43KvGb0WfM"/>
              </div>
              <div className="p-4">
                <h3 className="font-h3 text-h3 mb-1">Kyoto, Japan</h3>
                <p className="font-body text-body text-on-surface-variant line-clamp-2 mb-3">Temples, gardens, and timeless traditions.</p>
                <div className="flex justify-between items-center">
                  <span className="font-label-sm text-label-sm inset bg-surface-container-high px-2 py-1 rounded">Asia</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-surface rounded-xl raised overflow-hidden card-tilt spring-transition cursor-pointer group">
              <div className="h-48 overflow-hidden">
                <img alt="Sydney" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA01cmX_J_k8beFkKTJr5f4tyCS1uX0lJWEu_7901ZDVrrgvknUhjA1MgDt_twJULs_3j-rRf23fHq8ga4Cx3XipJ0MNLOo8oq907X6KKTsNg4qUJq2xcU7jVhjmyeEKD2wdhGNpZfL7610e4u0GBVQLGUUZdF8hpqXL4x6kgRXxdcSNMU1LUREuK9jH2AleCFvDz_BefOSU0wwH0HaBs0aCzl2fh1dXhKfYMZ6q5fnoj8iVznOiwyV2hpZlMZaGVx6FC7f6Ff3F4Q"/>
              </div>
              <div className="p-4">
                <h3 className="font-h3 text-h3 mb-1">Sydney, Aus</h3>
                <p className="font-body text-body text-on-surface-variant line-clamp-2 mb-3">Iconic harbors and stunning coastal walks.</p>
                <div className="flex justify-between items-center">
                  <span className="font-label-sm text-label-sm inset bg-surface-container-high px-2 py-1 rounded">Oceania</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-surface rounded-xl raised overflow-hidden card-tilt spring-transition cursor-pointer group">
              <div className="h-48 overflow-hidden">
                <img alt="Dubai" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrLBECSVBpqHYDr-Km3fdgwHkjDlCVo7fQjISJDv1lryecGdkUnuh1VRm9dI3c1Y5x8BfhcjS7vrA5bnXQxEPhLoo5hpUxA36eHSMqXDYquwNrSQEmmIVaMS4hq-mZUH9nl5OcqSUZdswTs8cFLAQkq8dwj5UnUHq9iYOrlIj68mj_48io9eKQAJSYm0_pY6PsCeA7Gf12-XmPfKS1vxbO2sjhffT8waRoyLp0dD6lhOK-1_JlBLsjVERKFIBWpDGDfJsTVhZVigw"/>
              </div>
              <div className="p-4">
                <h3 className="font-h3 text-h3 mb-1">Dubai, UAE</h3>
                <p className="font-body text-body text-on-surface-variant line-clamp-2 mb-3">Futuristic skylines meet desert luxury.</p>
                <div className="flex justify-between items-center">
                  <span className="font-label-sm text-label-sm inset bg-surface-container-high px-2 py-1 rounded">Middle East</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Trips */}
        <section className="mb-16">
          <h2 className="font-h2 text-h2 mb-6">Previous Trips</h2>
          <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory hide-scrollbar">
            {/* History Card 1 */}
            <div className="min-w-[300px] flex-shrink-0 bg-surface rounded-lg p-4 raised snap-start flex items-center gap-4 card-tilt spring-transition">
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img alt="Paris" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwIQtf_G-PVjGR_zKsjE3Af1RjGHf6rgOSkYGs4xrdisM9SHOK13pJN-XrSAyOHBn4sv8L60bgxGDHj85UVdcT5YjpAkOeYLo2Tl2_BrMUMtLEGtSVk0phlB8LO4q4bbWiuvA6zQ4ou1HiD0IEOho2mrvT725jFz5KIt6iEuUBk9ZLuZU3xY-i2bHgrtWOcslZV1gv72MO8ztdFT1MPRAtFdfVzVG5G8nOwqn8fhQ-VIdZs8K9-bjjAIpiO-LLxL5Y0nNxjrUmXew"/>
              </div>
              <div>
                <h4 className="font-h3 text-h3 text-base mb-1">Paris Getaway</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">May 2023 • 5 Days</p>
              </div>
            </div>
            {/* History Card 2 */}
            <div className="min-w-[300px] flex-shrink-0 bg-surface rounded-lg p-4 raised snap-start flex items-center gap-4 card-tilt spring-transition">
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img alt="Coffee" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTHpb9qzDMTvpzsfvCY9AqLVqxgo2jHw9KpjV_mjRg3KH_--ZjAulytn4RQ_lntKHBsNTCWf8PzruJnq0707kvzoXyc4Lcko9ltXmH4LZ54Z440AfpCwMEJprv3MnL7wOnpudbBZmLCpo5GAPdZS9bgy9lR3pMSvpZyZHPYJzI3xegQl-HSXsSpiq2iY9qk6ZuIpQVBcIqmKdtmiPiRbQhxZhNhp1APX1HL4KSGfeex8s8T5-fh0Pi5yzk3ppNwRhJt5PJYmbpclE"/>
              </div>
              <div>
                <h4 className="font-h3 text-h3 text-base mb-1">Pacific Coast Trail</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Aug 2022 • 14 Days</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-low dark:bg-surface-dim text-secondary dark:text-secondary-fixed-dim font-label-sm text-label-sm w-full py-8 mt-auto border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin_mobile md:px-margin_desktop max-w-container_max mx-auto gap-4">
          <div className="font-interactive text-interactive font-bold text-on-surface">
            Traveloop Console
          </div>
          <div className="flex gap-4">
            <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Terms of Service</a>
            <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">API Docs</a>
          </div>
          <div>
            © 2024 Traveloop Console. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
