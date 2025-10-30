import React from 'react';

export default function FilterGroup({
  title,
  items = [],
  type = 'generic',
  selectedTags = [],
  toggleTag = () => {},
  nameRenderer = null,
}) {
  const modifier = `employer-filter-group--${type}`;

  return (
    <div className={`employer-filter-group ${modifier}`}>
      <div className="employer-filter-label">{title}</div>
      <ul>
        {items.map(item => (
          <li key={item.name}>
            <label>
              <input
                type="checkbox"
                checked={selectedTags.includes(item.name)}
                onChange={() => toggleTag(item.name)}
              />
              {' '}
              {nameRenderer ? (
                nameRenderer(item)
              ) : (
                <>
                  <span className="employer-filter-name">{item.name}</span>
                  <span className="employer-filter-count">{item.count}</span>
                </>
              )}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
