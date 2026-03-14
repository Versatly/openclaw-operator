import type { ServiceItem } from "@/lib/data";

type ServiceCardProps = {
  service: ServiceItem;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-2xl" aria-hidden="true">
        {service.icon}
      </p>
      <h3 className="mt-4 font-heading text-xl font-semibold text-onyx">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-onyx/80">{service.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-onyx/80">
        {service.bulletPoints.map((bullet) => (
          <li className="flex gap-2" key={bullet}>
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-tiger" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
