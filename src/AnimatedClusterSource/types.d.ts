export interface AnimatedClusterOptions {
  radius?: number;
  maxZoom?: number;
  animationDuration?: number;
  clusterColor?: any;
  clusterRadius?: any;
  clusterStrokeWidth?: number;
  clusterStrokeColor?: string;
  clusterTextSize?: number;
  clusterTextColor?: string;
  pointColor?: string;
  pointRadius?: number;
  pointStrokeWidth?: number;
  pointStrokeColor?: string;
  enablePulsation?: boolean;
  clusterProperties?: object;
  onPointClick?: (e: any, sourceId: string) => void;
}
