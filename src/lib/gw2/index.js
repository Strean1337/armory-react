import { get } from 'axios';
import config from 'config';
import { mapItemsToObject } from './parse';

function reduceById (payload) {
  return payload.reduce((acc, item) => ({
    ...acc,
    [item.id]: item,
  }), {});
}

export const readWorlds = (ids) =>
  get(`${config.gw2.endpoint}v2/worlds?ids=${ids.join(',')}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));

export const readLegends = (ids) =>
  get(`${config.gw2.endpoint}v2/legends?ids=${ids.join(',')}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));

export const readAchievements = (ids) =>
  get(`${config.gw2.endpoint}v2/achievements?ids=${ids.join(',')}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));

export const readPets = (ids) =>
  get(`${config.gw2.endpoint}v2/pets?ids=${ids.join(',')}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));

export const readPvpSeasons = (ids) =>
  get(`${config.gw2.endpoint}v2/pvp/seasons?ids=${ids.join(',')}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));

export const readMaps = (ids) =>
  get(`${config.gw2.endpoint}v2/maps?ids=${ids.join(',')}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));

export const readAmulets = (ids) =>
  get(`${config.gw2.endpoint}v2/pvp/amulets?ids=${ids.join(',')}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));

export const readPvpSeasonIds = () =>
  get(`${config.gw2.endpoint}v2/pvp/seasons`, {
    ignoreAuth: true,
  })
  .then(({ data }) => data);

export const readPvpSeason = (id) =>
  get(`${config.gw2.endpoint}v2/pvp/seasons/${id}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => data);

export const readSkills = (ids) =>
  get(`${config.gw2.endpoint}v2/skills?ids=${ids.join(',')}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));

export const readAllItemIds = () =>
  get(`${config.gw2.endpoint}v2/items`, {
    ignoreAuth: true,
  })
  .then(({ data }) => data);

export const readItems = (ids) => {
  const delimitedIds = ids.join(',');

  return get(`${config.gw2.endpoint}v2/items?ids=${delimitedIds}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => mapItemsToObject(data));
};

export const readItemStats = (ids) => {
  const delimitedIds = ids.join(',');

  return get(`${config.gw2.endpoint}v2/itemStats?ids=${delimitedIds}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => mapItemsToObject(data));
};

export const readSkins = (ids) => {
  const delimitedIds = ids.join(',');

  return get(`${config.gw2.endpoint}v2/skins?ids=${delimitedIds}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));
};

export const readSpecializations = (ids) => {
  const delimitedIds = ids.join(',');

  return get(`${config.gw2.endpoint}v2/specializations?ids=${delimitedIds}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));
};

export const readTraits = (ids) => {
  const delimitedIds = ids.join(',');

  return get(`${config.gw2.endpoint}v2/traits?ids=${delimitedIds}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => reduceById(data));
};

export const readGuild = (guid) =>
  get(`${config.gw2.endpoint}v1/guild_details.json?guild_id=${guid}`, {
    ignoreAuth: true,
  })
  .then(({ data }) => data);
