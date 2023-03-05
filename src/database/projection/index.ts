import { GraphQLResolveInfo } from 'graphql';
import { fieldsMap, fieldsProjection } from 'graphql-fields-list';


const createProjection = (info: GraphQLResolveInfo) => {
    // Generate a projection object based on the requested fields
    const projection = fieldsProjection(info);
    const mappedFields = fieldsMap(info);
    const fieldsToPopulate =  Object.fromEntries(Object.entries(mappedFields).filter(([, value]) => typeof value === 'object'));
    
    const projectionWithoutNested = Object.fromEntries(Object.entries(projection).filter(([key]) => {
      return !key.includes('.')
    }))

    function createPopulateObject(obj: object) {
      const populateArr = [];
    
      for (const [key, value] of Object.entries(obj)) {
        const path = key;
    
        if (typeof value === 'object' && value !== null) {
          const subPopulate = createPopulateObject(value);
    
          populateArr.push({
            path,
            select: Object.keys(value).join(' '),
            ...(subPopulate.length ? ({populate:  subPopulate}) : ({}))
          });
        } else if (value) {
          populateArr.push({ path });
        }
      }
    
      return populateArr;
    }

    return ({
      projection: projectionWithoutNested,
      populate: createPopulateObject(fieldsToPopulate)
    })
}

export default createProjection;