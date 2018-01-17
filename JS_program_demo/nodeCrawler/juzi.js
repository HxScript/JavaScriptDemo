"use strict"
 
const request = require('request')
const cheerio = require('cheerio')





function Sentence() {
	this.content = ''
	this.author = ''
	// this.id = 0
	this.like = ''
}

const log = function() {
	console.log.apply(console, arguments)
}

// http://www.juzimi.com/article/大话西游
// div 是  .views-field-phpcode
// var sen = es('.xqjulistwafo')
// var author = es('.xlistju')

const senFromDiv = function(div) {
	const sentence = new Sentence()
	const e = cheerio.load(div)

	sentence.content = e('.xqjulistwafo').text()
	sentence.author = e('.xlistju').text()
	sentence.like = e('.views-field-ops').text()

	return sentence
}

const saveSentence = function(sen) {
	const fs = require('fs')
	const path = 'sentence.txt'
	const s = JSON.stringify(sen, null, 2) + ','
	fs.appendFile(path, s, function(error) {
		if (error !== null) {
            log('*** 写入文件错误', error)
        } else {
            log('--- 保存成功')
        }
	})
}

const sentenceFromUrl = function(url) {

	request(url, function(error, response, body) {
		if (error === null && response.statusCode == 200) {
			const e = cheerio.load(body)
			const sen = []

			const senDivs = e('.views-field-phpcode')

			for(let i = 0; i < senDivs.length; i++) {
				let element = senDivs[i]
				const div = e(element).html()
				const s = senFromDiv(div)
				sen.push(s)
			}
			saveSentence(sen)
		} else {
			log('aaaaaaaaaaaaaaaaaaa网站请求错啦！', error)
		}
	})
}

const ___main = function() {
	for (let i = 0 ;i <= 17; i++) {
	const url = 'http://www.juzimi.com/article/%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8?page=' + i
	sentenceFromUrl(url)
	}
}

___main()