import { Collapse } from "antd";
import styles from '../../styles/faq.module.css';


export default function List({content, block, language='en'}){
  function replaceContent(str, search) {
    return str.replace(search, `<span class=${styles.email}>${block.email}</span>`)
  }

  return (
    <div className={`FAQ-global`}>
      <div className={styles.header}>
        <div className={styles[`FAQ-header-center-container`]}>
          <div className={styles.title}>{block.contentTitle[language] || block.contentTitle['en']}</div>
          <div className={styles.content} dangerouslySetInnerHTML={{__html: replaceContent(block.description[language] || block.description['en'], '${email}')}}></div>
        </div>
      </div>
      <div className={styles['FAQ-list']}>
        <div className={styles['FAQ-center-container']}>
          <Collapse className={styles['FAQ-collapse']} expandIcon={() => <img className="expand-arrow" src='/arrow-icon.svg' />} accordion={false} expandIconPosition="end" >
              {
                block.items.map((item,index)=>{
                  return (
                    <Collapse.Panel header={item.question[language] || item.question['en']} key={index}>
                      <div className={styles['FAQ-content']} dangerouslySetInnerHTML={{__html:item.answer[language] || item.answer['en']}}></div>
                    </Collapse.Panel>
                  )
                })
              }
          </Collapse>
        </div>
      </div>
    </div>
  )
}