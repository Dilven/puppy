import { CollectionBasic, CollectionPreview } from "./collection"

export type SeriesBasic = CollectionBasic & {

}

export type SeriesPreview = CollectionPreview & {
  totalSeasons: string;
}