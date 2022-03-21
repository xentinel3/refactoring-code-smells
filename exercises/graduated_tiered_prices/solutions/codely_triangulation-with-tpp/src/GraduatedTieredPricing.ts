import { Tier } from "./Tier";

export class GraduatedTieredPricing {
  for(subscriptions: number): number {
    const tier1 = new Tier(1, 2, 299);
    const tier2 = new Tier(3, 10, 239);
    const tier3 = new Tier(11, 25, 219);

    if (subscriptions >= 11) {
      return (
        tier1.fullTierTotal() +
        tier2.fullTierTotal() +
        tier3.totalFor(subscriptions)
      );
    }

    if (subscriptions >= 3) {
      return tier1.fullTierTotal() + tier2.totalFor(subscriptions);
    }

    return tier1.totalFor(subscriptions);
  }
}
