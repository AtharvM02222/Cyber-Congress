import { alumni } from "@/data/alumni";
import { PageHeader } from "@/components/ui/page-header";

export default function Alumni() {
  return (
    <div className="page-container">
      <PageHeader title="Alumni" actionText="Team" actionHref="/team" />

      {alumni.length === 0 ? (
        <div className="alumni-empty">
          <p className="alumni-empty-text">Alumni details coming soon...</p>
        </div>
      ) : (
        <div className="alumni-grid">
          {alumni.map((member) => (
            <div key={member.id} className="alumni-card">
              <div>
                <h3 className="alumni-card-name">{member.name}</h3>
                <p className="alumni-card-role">{member.role}</p>
              </div>
              <div className="alumni-card-year-row">
                <span className="alumni-card-label">Class of</span>
                <span className="alumni-card-year">{member.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
