import { memo, useEffect, useRef } from "react";

type WindowWithTurnstile = Window & typeof global & { turnstile: any };

export const Turnstile = memo(
  ({
    siteKey,
    onVerify,
  }: {
    siteKey: string;
    onVerify: (token: string) => void;
  }) => {
    const turnstileRef = useRef(null);

    useEffect(() => {
      const turnstile = (window as WindowWithTurnstile).turnstile || {};
      if (turnstile && turnstile.render) {
        turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            onVerify(token);
          },
        });
      }
    }, [siteKey, onVerify]);

    return <div ref={turnstileRef}></div>;
  }
);
