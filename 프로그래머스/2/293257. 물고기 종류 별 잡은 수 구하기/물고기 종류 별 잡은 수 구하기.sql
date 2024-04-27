-- 코드를 작성해주세요
SELECT COUNT(*) AS FISH_COUNT
     , B.FISH_NAME
FROM FISH_INFO A
INNER JOIN FISH_NAME_INFO B ON A.FISH_TYPE = B.FISH_TYPE
GROUP BY 2
ORDER BY FISH_COUNT DESC