import Head from 'next/head'
import React, { useState } from 'react'
import EmployerCard from '../components/EmployerCardNew'
import EmployerSidebar from '../components/EmployerSidebar'

const mockCompanies = new Array(12).fill(0).map((_, i) => ({
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
  return (
    <>
      <Head>
        <title>Employer Search — OldEmployer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <section className='searchbar'>
          <div className="searchbar-hero-text">
            <h1 className="searchbar-hero-title">Find Your Next Employer</h1>
            <p className="searchbar-hero-sub">Search top companies and discover your dream job</p>
          </div>
          <form className="searchbar-row" role="search" aria-label="Employer search">
            {/* Search input with icon inside input */}
            <div className="searchbar-field searchbar-input">
              <svg className="searchbar-icon" width="22" height="22" fill="none" stroke="#bfc6d1" strokeWidth="2" viewBox="0 0 24 24" style={{marginRight: '8px'}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
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
            <button
              type="submit"
              className={`searchbar-btn searchbar-btn-hero${searchFocused ? ' searchbar-btn-hero-animate' : ''}`}
              aria-label="Search"
              onClick={() => {
                setSearchFocused(true);
                setTimeout(() => setSearchFocused(false), 400);
              }}
            >
              <span className="searchbar-btn-iconwrap">
                <svg width="28" height="28" fill="none" stroke="#0ea19b" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
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
          <span className="employer-results-info">Showing: {mockCompanies.slice(0,12).length} {selectedFilters.length > 0 && 'filtered '}startups</span>
          <div className="employer-main-viewbtns">
            <button className="employer-view-btn" aria-label="Grid view">
              <i className="fas fa-th" style={{ color: '#23babc' }} aria-hidden="true"></i>
            </button>
            <button className="employer-view-btn" aria-label="List view">
              <i className="fas fa-list" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        

        
        <div className="company-grid">
          {/* Employer cards grid - 3 columns */}
          {mockCompanies.slice(0, 12).map((company, i) => (
            <EmployerCard key={company.id} {...company} />
          ))}
          {/* Ad placeholder in grid */}
        </div>






        {/* Pagination and bottom ad */}
        {/* <div className="employer-pagination-row">
          <div className="employer-pagination">
            <button className="employer-pagination-btn">1</button>
            <button className="employer-pagination-btn">2</button>
            <button className="employer-pagination-btn">3</button>
            <button className="employer-pagination-btn">4</button>
          </div>
          <div className="employer-ad employer-ad-bottom">Ad here...</div>
        </div> */}
      </div>
    </div>
  </section>
      </main>
    </>
  )
}