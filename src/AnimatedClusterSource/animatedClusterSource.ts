import maplibregl, {
  CanvasSourceSpecification,
  MapOptions,
  SourceSpecification,
} from 'maplibre-gl';
import { AnimatedClusterOptions } from './types';

class AnimatedClusterSource extends maplibregl.Map {
  private defaultClusterOptions: AnimatedClusterOptions;
  private animatedSources: Map<string, any>;
  private animatingClusters: Set<string>;

  constructor(options: MapOptions) {
    super(options);

    this.defaultClusterOptions = {
      radius: 50,
      maxZoom: 14,
      animationDuration: 500,
    };

    this.animatedSources = new Map();
    this.animatingClusters = new Set();

    // this.onZoomStart = this.onZoomStart.bind(this);
    // this.onZoomEnd = this.onZoomEnd.bind(this);
    // this.onSourceData = this.onSourceData.bind(this);
    //
    // this.on('load', () => {
    //   this.setupEventListeners();
    // });
  }

  // setupEventListeners() {
  //   this.on('zoomstart', this.onZoomStart);
  //   this.on('zoomend', this.onZoomEnd);
  //   this.on('sourcedata', this.onSourceData);
  // }

  addAnimatedClusterSource(
    sourceId: string,
    source: SourceSpecification | CanvasSourceSpecification,
    options: AnimatedClusterOptions = {},
  ): this {
    console.log('bruv');
    const clusterOptions = {
      ...this.defaultClusterOptions,
      ...options,
    };

    this.animatedSources.set(sourceId, {
      data: source,
      options: clusterOptions,
      layerIds: {
        clusters: `${sourceId}-clusters`,
        clusterCount: `${sourceId}-cluster-count`,
        unclusteredPoint: `${sourceId}-unclustered-point`,
      },
    });

    console.log(source);
    return this;
  }
}

export default AnimatedClusterSource;
