function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function trashTalk(options) {

  // Prevent user from clicking button before choosing a career
  if (!options.career) {
    return `請選擇一個職業！`
  }

  // 宣告組合元素
  const careerCN = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家',
    politician: '政治家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
    politician: ['舔個盤子', '綁個鞋帶', '爬一棵樹', '讓人民有錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const careerResult = careerCN[options.career]

  const taskResult = sample(task[options.career])

  const phraseResult = sample(phrase)

  console.log(`身為一個${careerResult}，${taskResult}，${phraseResult}吧？`)

  return `身為一個${careerResult}，${taskResult}，${phraseResult}吧？`

}

// 測試資料
// let options = { career: 'engineer' }
// trashTalk(options)

// export generatePassword function for other files to use
module.exports = trashTalk