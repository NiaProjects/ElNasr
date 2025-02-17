import { TranslateContext } from '@/context/TranslateContext';
import { useContext, useMemo } from 'react';

export default function useExtractData(data = {}) {
  const { lang } = useContext(TranslateContext);

  const extractLangKeys = (obj) => {
    // لو الـ obj مصفوفة، هنلف على كل عنصر فيها ونطبّق عليه نفس الدالة
    if (Array.isArray(obj)) return obj.map(item => extractLangKeys(item));

    // لو الـ obj مش كائن (يعني نص، رقم، null...) نرجعه زي ما هو
    if (typeof obj !== 'object' || obj === null) return obj;

    const newObj = {}; // ده الكائن الجديد اللي هنرجعه بعد التعديل

    for (const key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) continue; // نتأكد إن المفتاح ملك الكائن مش جاي من الـ prototype

      const value = obj[key];

      // لو القيمة نفسها كائن أو مصفوفة، نعيد استدعاء نفس الدالة علشان نعالجه
      newObj[key] = typeof value === 'object' && value !== null ? extractLangKeys(value) : value;

      // لو المفتاح بينتهي بـ `_lang`، نحط مفتاح جديد من غير `_lang` بنفس القيمة
      if (key.endsWith(`_${lang}`)) {
        const baseKey = key.slice(0, -(`_${lang}`.length)); // نشيل `_lang` من اسم المفتاح
        newObj[baseKey] = value;
      }
    }

    return newObj;
  };

  // نستخدم useMemo علشان نحسن الأداء وما نعيدش الحسابات لو `data` أو `lang` ما اتغيروش
  return useMemo(() => extractLangKeys(data), [data, lang]);
}
