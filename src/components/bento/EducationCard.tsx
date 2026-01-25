import EditorialCard from "../EditorialCard";

const EducationCard = () => {
  return (
    <EditorialCard className="editorial-medium" delay={0.3}>
      <div className="section-header">
        <h2 className="editorial-heading">Education</h2>
        <span className="circled-number">4</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-6 md:mb-0">
          <div className="flex items-start gap-4 mb-4">
            <span className="circled-number shrink-0">1</span>
            <div>
              <p className="editorial-label mb-1">2023 - 2027</p>
              <h3 className="font-display text-xl uppercase tracking-tight font-semibold">
                MMCOE Pune
              </h3>
            </div>
          </div>
          <div className="pl-12">
            <p className="text-sm font-medium uppercase tracking-wide mb-2">
              B.E. in AI & Data Science
            </p>
            <p className="editorial-body text-muted-foreground">
              Specializing in artificial intelligence and data science with focus on machine learning and blockchain technologies.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="editorial-label mb-2">Academic Performance</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-display font-bold">8.86</span>
              <span className="text-sm font-mono text-muted-foreground">SGPA</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="editorial-label mb-2">Key Courses</p>
            <div className="flex flex-wrap gap-2">
              {["Machine Learning", "Data Structures", "Blockchain", "Web Development"].map((course) => (
                <span key={course} className="text-xs font-mono uppercase tracking-wide border border-foreground px-2 py-1">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </EditorialCard>
  );
};

export default EducationCard;