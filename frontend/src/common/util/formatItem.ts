export const formatCurrency = ({ currency, amount }: PriceDetails) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(Number(amount));
};

export const formatText = (text: string) => {
  return text?.replace(/([A-Z])/g, " $1").trim();
};

type PriceDetails = {
  amount: string;
  currency: string;
};
