import * as XLSX from 'xlsx';
import FileSaver from 'file-saver';
/**
 * 导出工具类
 */
class ExportUtils{
  /**
   * 导出表格为Excel文件
   * @param {string} elementId - 要导出的表格元素的ID 例：'myTable'
   * @param {string} fileName - 导出的Excel文件名称  例：'集团数据'
   */
  exportExcel(elementId: string, fileName: string) {
    const tableElement = document.querySelector(`#${elementId}`);

    if (!tableElement) {
      console.error(`元素ID为 ${elementId} 的元素未找到`);
      return;
    }

    // 生成工作簿对象
    const xlsxParam = { raw: true }; // 导出的内容只做解析，不进行格式转换
    const wb = XLSX.utils.table_to_book(tableElement, xlsxParam);

    // 获取二进制字符串作为输出
    const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });

    try {
      const defaultFileName = '导出数据.xlsx';
      const exportFileName = fileName + '.xlsx' || defaultFileName;

      FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), exportFileName);
    } catch (e) {
      if (typeof console !== 'undefined') {
        console.log(e, wbout);
      }
    }

    return wbout;
  }
}
/**
 * 导出工具类
 */
export default new ExportUtils();

