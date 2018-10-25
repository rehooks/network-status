interface NetworkState {
  downlink: float;
  downlinkMax: float;
  effectiveType: "slow-2g" | "2g" | "3g" | "4g";
  rtt: integer;
  type: "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown";
}

declare function useNetworkStatus(): NetworkState;
