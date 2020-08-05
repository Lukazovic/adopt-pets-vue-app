import dogs from '../data/dogs'
import cats from '../data/cats'

export default {
  dogs,
  cats,
  pets: [...dogs, ...cats]
}
