/**
 * Constructs a row of buttons used to change the strength state for the shotmap and statistics.
 * @param {boolean} active used to determine button styling if selected.
 * @param {Function} onChange callback to dictate behaviour upon selection.
 * @returns {JSX.Element} row of buttons to change the strength state.
 */
const StrengthToggle = ({active, onChange}) => {
  const btns = ['ALL', 'EV', 'ALL w/o ENG'];

  return (
    <div className="filter-wrapper">
      <div className="panel">
        {btns.map((b) => (
          <button key={b} className={`segment ${active === b ? 'active' : ''}`} onClick={() => onChange(b)}>
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StrengthToggle;