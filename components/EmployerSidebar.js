import React, { useState, useEffect } from "react";
import FilterGroup from "./FilterGroup";

export default function EmployerSidebar({ onClear, onFilterChange }) {
  const [spinning, setSpinning] = useState(false);
  // selected tags shown as pills
  const [selectedTags, setSelectedTags] = useState([]);

  // notify parent when selected tags change
  useEffect(() => {
    if (typeof onFilterChange === 'function') onFilterChange(selectedTags);
  }, [selectedTags, onFilterChange]);

  // lists for the filter groups (name + count)
  const countries = [
    { name: 'Pakistan', count: 2530 },
    { name: 'China', count: 1547 },
    { name: 'Norway', count: 354 },
    { name: 'Sweden', count: 1457 },
    { name: 'Finland', count: 1875 },
  ];
  const industries = [
    { name: 'Advertising', count: 2530 },
    { name: 'Blockchain', count: 2530 },
    { name: 'Education', count: 2530 },
    { name: 'Fashion & Living', count: 2530 },
    { name: 'Food & Beverage', count: 2530 },
    { name: 'Health & Fitness', count: 2530 },
    { name: 'Hotel Casinos', count: 2530 },
    { name: 'Creative Artist', count: 2530 },
    { name: 'Sports', count: 2530 },
  ];
  const sizes = [
    { name: '1-10', count: 87544 },
    { name: '11-50', count: 9457 },
    { name: '51-100', count: 3450 },
    { name: '101-200', count: 1850 },
    { name: '200-500', count: 1850 },
    { name: '500-1000', count: 1850 },
    { name: '1000+', count: 1850 },
  ];
  const ratings = [
    { name: '★★★★★', count: 1850 },
    { name: '★★★★☆', count: 1850 },
    { name: '★★★☆☆', count: 1850 },
    { name: '★★☆☆☆', count: 1850 },
    { name: '★☆☆☆☆', count: 1850 },
  ];

  function toggleTag(tag) {
    setSelectedTags(prev => {
      if (prev.includes(tag)) return prev.filter(t => t !== tag);
      return [...prev, tag];
    });
  }

  function handleClearClick() {
    // trigger the spin animation class for a short time
    setSpinning(true);
    setTimeout(() => setSpinning(false), 600);
    // call provided clear handler if any
    if (typeof onClear === 'function') onClear();
    // also clear local selected tags
    setSelectedTags([]);
  }

  function removeTagAt(index) {
    setSelectedTags(prev => {
      const next = prev.slice();
      next.splice(index, 1);
      return next;
    });
  }

  return (
    <aside className="employer-sidebar">
      <div className="employer-clear-btn-wrap">
        <button
          className="employer-clear-button"
          type="button"
          aria-label="Clear all filters"
          onClick={handleClearClick}
        >
          <span className={`employer-clear-icon ${spinning ? 'spin' : ''}`} aria-hidden="true">
            <i className="fa-solid fa-rotate-right" aria-hidden="true"></i>
          </span>
          <h6 className="employer-sidebar-heading">Clear all Filters</h6>
        </button>

        {/* Selected filter chips (editable) */}
        <div className="employer-selected-chips" aria-live="polite">
          {selectedTags.map((tag, i) => (
            <span key={`${tag}-${i}`} className="employer-chip">
              <span className="employer-chip-label">{tag}</span>
              <button
                type="button"
                className="employer-chip-remove"
                aria-label={`Remove ${tag}`}
                onClick={(e) => { e.stopPropagation(); removeTagAt(i); }}
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </span>
          ))}
        </div>
      </div>

      <FilterGroup
        title="Countries"
        items={countries}
        type="countries"
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      />

      <FilterGroup
        title="Industry"
        items={industries}
        type="industry"
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      />

      <FilterGroup
        title="Size"
        items={sizes}
        type="size"
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      />

      <FilterGroup
        title="Rating"
        items={ratings}
        type="rating"
        selectedTags={selectedTags}
        toggleTag={toggleTag}
        nameRenderer={(item) => (
          <>
            <span className="employer-rating-stars">{item.name}</span>
            <span className="employer-filter-count">{item.count}</span>
          </>
        )}
      />
    </aside>
  );
}
