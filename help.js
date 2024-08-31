const showInfo = (data) => {
  const language = data
    .split('\n')
    .map((e) => e.split(',').reduce((acc, el, i) => {
      switch (i) {
        case 0:
          acc['Язык'] = el;
          break;
        case 1:
          acc['Количество носителей'] = Number(el);
          break;
        case 2:
          acc['Континент'] = el;
          break;
        case 3:
          acc['Сложность изучения'] = el;
          break;
        case 4:
          acc['Число стран'] = Number(el);
          break;
        default:
          acc[el] = el;
          break;
      }
      return acc;
    }, {}))
    .filter((e) => e['Язык'] && e['Язык'] !== 'Язык');
  console.log(`Count: ${language.length}`);
  const getAllLang = language.reduce((acc, lang) => {
    if (acc[lang['Континент']]) {
      acc[lang['Континент']] += 1;
    } else {
      acc[lang['Континент']] = 1;
    }
    return acc;
  }, {});
  console.log(`Continents: ${Object.keys(getAllLang).join(', ')}`);

  const countryLangs = language.reduce((acc, lang) => {
    if (lang['Число стран'] === 1) {
      return acc + 1;
    }
    return acc;
  }, 0);
  console.log(`Amount of languages with 1 country: ${countryLangs}`);

  const quantityPeople = language.reduce((acc, lang) => {
    if (acc < lang['Количество носителей']) return lang['Количество носителей'];
    return acc;
  }, 0);

  const quantityPeople2 = language.filter((i) => i['Количество носителей'] === quantityPeople)
    .map((i) => i['Язык']);

  console.log(`The most popular language: ${quantityPeople2[0]}`);

  const level = language.reduce((acc, lvl) => {
    if (lvl['Сложность изучения'] === 'Высокая') {
      if (acc['Высокая']) {
        acc['Высокая'] += 1;
      } else {
        acc['Высокая'] = 1;
      }
    } else if (lvl['Сложность изучения'] === 'Средняя') {
      if (acc['Средняя']) {
        acc['Средняя'] += 1;
      } else {
        acc['Средняя'] = 1;
      }
    } else if (lvl['Сложность изучения'] === 'Низкая') {
      if (acc['Низкая']) {
        acc['Низкая'] += 1;
      } else {
        acc['Низкая'] = 1;
      }
    }
    return acc;
  }, {});

  console.log(`Complexity: Низкая: ${level['Низкая']}, Средняя: ${level['Средняя']}, Высокая: ${level['Высокая']}`);
};

export default showInfo;
