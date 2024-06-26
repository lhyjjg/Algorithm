-- 코드를 입력하세요
SELECT FP.PRODUCT_ID
     , FP.PRODUCT_NAME
     , SUM(FP.PRICE * FO.AMOUNT) AS TOTAL_SALES
FROM FOOD_PRODUCT AS FP
JOIN FOOD_ORDER AS FO ON FP.PRODUCT_ID = FO.PRODUCT_ID
WHERE DATE_FORMAT(PRODUCE_DATE, "%y-%m") = "22-05"
GROUP BY FP.PRODUCT_ID
ORDER BY 3 DESC, FP.PRODUCT_ID ASC