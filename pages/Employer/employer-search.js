import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import EmployerCard from '../../components/EmployerCardNew'
import Pagination from '../../components/Pagination'
import EmployerSidebar from '../../components/EmployerSidebar'

const mockCompanies = new Array(30).fill(0).map((_, i) => ({
  id: i + 1,
  title: `Andropple lab ${i + 1}`,
  location: 'Pakistan',
  rating: (4 + (i % 2) * 0.1).toFixed(1),
  reviews: `${150 + i}`,
  avatar: '/logo192.png'
}))

export default function EmployerSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [view, setView] = useState('grid'); // 'grid' | 'list'
  const perPage = view === 'list' ? 7 : 12; // max cards per page (7 for list view)
  const totalPages = Math.max(1, Math.ceil(mockCompanies.length / perPage));
  const visibleCompanies = mockCompanies.slice((page - 1) * perPage, page * perPage);
  
  useEffect(() => {
    // prevent body scroll when mobile sidebar is open
    if (typeof window !== 'undefined') {
      if (sidebarOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
    return () => { document.body.classList.remove('no-scroll'); }
  }, [sidebarOpen]);
  return (
    <>
      <Head>
        <title>Employer Search — OldEmployer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

  <main className="employer-search-main" style={{ background: '#f5f7fb', minHeight: '100vh' }}>
  <section className='searchbar' style={{ background: '#ffffff' }}>
          <div className="searchbar-hero-text">
            <h1 className="searchbar-hero-title">Find Your Next Employer</h1>
            <p className="searchbar-hero-sub">Search top companies and discover your dream job</p>
          </div>
          <form className="searchbar-row" role="search" aria-label="Employer search">
            {/* Search input with icon inside input */}
            <div className="searchbar-field searchbar-input">
              <svg className="searchbar-icon" width="22" height="22" fill="none" stroke="#bfc6d1" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: '8px' }}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input type="text" placeholder="Search by name & keyword..." aria-label="Search" />
            </div>
            {/* Location select */}
            <div className="searchbar-field searchbar-select">
              <select aria-label="Choose Location">
                <option value="">Choose Location</option>
                <option>Karachi</option>
                <option>Lahore</option>
                <option>Islamabad</option>
              </select>
            </div>
            {/* Animated search button at end */}
            <button type="submit" className={`searchbar-btn searchbar-btn-hero${searchFocused ? ' searchbar-btn-hero-animate' : ''}`} aria-label="Search" onClick={() => {
              setSearchFocused(true);
              setTimeout(() => setSearchFocused(false), 400);
              }}>
              <span className="searchbar-btn-iconwrap">
                <svg width="28" height="28" fill="none" stroke="#0ea19b" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </span>
            </button>
          </form>
        </section>
        <section className="employer-content-section">
          <div className="employer-layout">
            <EmployerSidebar onFilterChange={setSelectedFilters} />
            {/* Main Grid */}
            <div className="employer-main">
              <div className="employer-main-header">
                <span className="employer-results-info">Showing: {mockCompanies.length} startups</span>
                  {/* Mobile filter toggle - visible only on small screens via CSS */}
                  {!sidebarOpen && (
                    <button
                      className="employer-filter-toggle"
                      aria-label="Open filters"
                      onClick={() => setSidebarOpen(true)}
                    >
                      Filters
                    </button>
                  )}
                <div className="employer-main-viewbtns">
                  <button
                    className={`employer-view-btn ${view === 'grid' ? 'active' : ''}`}
                    aria-label="Grid view"
                    onClick={() => setView('grid')}
                    title="Grid view"
                  >
                    <i className="fas fa-th" aria-hidden="true"></i>
                  </button>
                  <button
                    className={`employer-view-btn ${view === 'list' ? 'active' : ''}`}
                    aria-label="List view"
                    onClick={() => setView('list')}
                    title="List view"
                  >
                    <i className="fas fa-list" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <div className={`company-grid ${view === 'list' ? 'list-view' : 'grid-view'}`}>
                {/* Employer cards grid - paginated: show up to `perPage` cards */}
                {visibleCompanies.map((company, i) => (
                  <EmployerCard key={company.id} {...company} layout={view === 'list' ? 'list' : 'vertical'} />
                ))}
                {/* Ad placeholder in grid */}
              </div>
              {totalPages > 1 && (
                <Pagination current={page} total={totalPages} onChange={(p) => setPage(p)} />
              )}

              {/* Bottom ad banner */}
              <div className="employer-ad employer-ad-bottom" role="complementary" aria-label="Advertisement">
                Ad here...
              </div>
            </div>
          </div>
        </section>

        {/* Mobile sidebar modal/overlay (renders when sidebarOpen) */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}>
            <div className="employer-sidebar-mobile" onClick={(e) => e.stopPropagation()}>
              <div className="employer-sidebar-mobile-header">
                <button className="employer-sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close filters" title="Close filters">
                  <i className="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
              {/* Do not auto-close when filters change inside the sidebar — let the user close with the Close button */}
              <EmployerSidebar onFilterChange={(filters) => { setSelectedFilters(filters); }} />
            </div>
          </div>
        )}
      </main>
    </>
  )
}
