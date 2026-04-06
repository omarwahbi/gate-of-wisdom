import React from "react";

export function LeadMagnet({ serviceType }: { serviceType: string }) {
  return (
    <div className="mt-16 w-full rounded-2xl bg-muted/50 p-12 text-center border border-primary/20">
      <h3 className="text-2xl font-bold text-foreground capitalize">
        Interested in {serviceType.replace(/-/g, " ")}?
      </h3>
      <p className="mt-4 text-muted-foreground">Download Form goes here.</p>
    </div>
  );
}
