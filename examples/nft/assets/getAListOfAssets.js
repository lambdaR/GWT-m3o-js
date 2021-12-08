const { NftService } = require("m3o/nft");

const nftService = new NftService(process.env.M3O_API_TOKEN);

// Return a list of NFT assets
async function getAlistOfAssets() {
  const rsp = await nftService.assets({
    limit: 1,
    order_by: "sale_date",
  });
  console.log(rsp);
}

getAlistOfAssets();
