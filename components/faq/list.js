import { Collapse } from "antd";
import styles from '../../styles/faq.module.css';


export default function List({content, block}){
    return (
      <div className={`desktop-view`}>
        <div className={styles.title}>{block.pageTitle}</div>
        <div className={styles['FAQ-list']}>
          <Collapse className={styles['FAQ-collapse']} expandIcon={() => <img src='/arrow-icon.svg' />} accordion={false} expandIconPosition="end" >
              {
                block.question_list.map((item,index)=>{
                  return (
                    <Collapse.Panel header={item.question} key={index}>
                      <div className={styles['FAQ-content']} dangerouslySetInnerHTML={{__html:item.answer}}></div>
                    </Collapse.Panel>
                  )
                })
              }
          </Collapse>
        </div>
      </div>
    )
}