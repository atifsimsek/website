const ProgressBar = ({ progress, width }) => {
  return (
    <div className="progress-container">
      <div style={{ width: `${width}%` }} className="progress">
        <span>%{progress}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
