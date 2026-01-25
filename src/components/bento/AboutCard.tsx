import EditorialCard from "../EditorialCard";

const AboutCard = () => {
  return (
    <EditorialCard className="editorial-small" delay={0.8}>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="editorial-subheading">Contents</h2>
      </div>

      <div className="space-y-2 md:space-y-4">
        {[
          { num: "01", label: "Experience", page: "Work history" },
          { num: "02", label: "Education", page: "Academic background" },
          { num: "03", label: "About", page: "Personal info" },
          { num: "04", label: "Skills", page: "Technical expertise" },
          { num: "05", label: "Projects", page: "Hackathons" },
          { num: "06", label: "Contact", page: "Get in touch" },
        ].map((item) => (
          <div key={item.num} className="flex items-center justify-between border-b border-foreground/20 pb-1.5 md:pb-2">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="font-mono text-xs text-muted-foreground">{item.num}</span>
              <span className="text-sm font-medium uppercase tracking-wide">{item.label}</span>
            </div>
            <span className="hidden md:inline text-[10px] font-mono text-muted-foreground uppercase">{item.page}</span>
          </div>
        ))}
      </div>
    </EditorialCard>
  );
};

export default AboutCard;