import { sendGetRequest } from "../network"
import { HomeDataModel } from "./ApiResponses"

export const FetchHomeData = async () => {
    let url = "https://61e7b9f6e32cd90017acbcd4.mockapi.io/api/movies/data"
    let res = await sendGetRequest<HomeDataModel>(url)
    return res
}