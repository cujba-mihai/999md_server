import defaultRegions from '~server/constants/defaultRegions';

export default async function () {
  await this.regionsService.removeAllRegions();
  await this.regionsService.createRegionsWithLocations(defaultRegions);
}
