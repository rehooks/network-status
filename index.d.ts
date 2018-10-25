interface NetworkState {
  downlink: number;
  downlinkMax: number;
  effectiveType: "slow-2g" | "2g" | "3g" | "4g";
  rtt: number;
  type: "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown";
}

export default function useNetworkStatus(): NetworkState;
