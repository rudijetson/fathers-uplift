export const formatCurrency = (value: string) => {
  const num = parseFloat(value)
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(num)
} 