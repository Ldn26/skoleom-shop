import { useEffect, useState, type ComponentType } from 'react';
import { useSiteChoices } from '../../context/SiteChoicesContext';

export default function OptionalServicesGate() {
  const { hasConsentFor } = useSiteChoices();
  const [LoadedServices, setLoadedServices] = useState<ComponentType | null>(null);
  const canLoadOptionalServices = hasConsentFor('analytics') || hasConsentFor('marketing');

  useEffect(() => {
    if (!canLoadOptionalServices || LoadedServices) return undefined;

    let active = true;

    void import('./DeferredBrowserServices')
      .then((module) => {
        if (active) {
          setLoadedServices(() => module.default);
        }
      })
      .catch(() => {
        if (active) {
          setLoadedServices(null);
        }
      });

    return () => {
      active = false;
    };
  }, [canLoadOptionalServices, LoadedServices]);

  return LoadedServices ? <LoadedServices /> : null;
}
