// // Add the removeAccents function
// function removeAccents(str) {
//     return str
//       .normalize("NFD")
//       .replace(/[\u0300-\u036f]/g, "")
//       .toLowerCase();
//   }
  
//   document.addEventListener("DOMContentLoaded", () => {
//     const menuTabs = [
//       "Áo",
//       "Quần",
//       "Giày Dép",
//       "Túi Xách",
//       "Dây Chuyền",
//       "Kiểu Tóc",
//       "Nền",
//     ];
  
//     const tabsContainer = document.querySelector(".nav-pills");
  
//     menuTabs.forEach((tab, index) => {
//       const tabLink = document.createElement("li");
//       tabLink.classList.add("nav-item");
//       tabLink.innerHTML = `<a class="nav-link" id="${removeAccents(
//         tab.toLowerCase().trim()
//       )}Tab" data-toggle="pill" href="#tab${index + 1}">${tab}</a>`;
//       tabsContainer.appendChild(tabLink);
//     });
  
//     let data;
  
//     const fetchData = async () => {
//       try {
//         const response = await fetch("../data/Data.json");
//         if (!response.ok) {
//           throw new Error(HTTP error! Status: ${response.status});
//         }
  
//         data = await response.json();
//         return data;
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//         throw error;
//       }
//     };
  
//     async function displayItems(tabId) {
//       try {
//         const data = await fetchData();
//         const normalizedTabId = removeAccents(tabId.toLowerCase().trim());
//         console.log("Normalized Tab ID:", normalizedTabId);
  
//         const tabData = data.tabPanes.filter((item) => {
//           const normalizedItemType = removeAccents(
//             item.type.toLowerCase().trim()
//           );
//           console.log("Normalized Item Type:", normalizedItemType);
  
//           return normalizedItemType === normalizedTabId;
//         });
  
//         console.log("Actual tabPanes:", data.tabPanes);
//         console.log("Actual tabId:", tabId);
//         console.log("Fetched Data:", data);
  
//         if (tabData.length > 0) {
//           console.log("Tab Data Length:", tabData.length);
//           console.log("Tab Data:", tabData);
  
//           // Lấy ra container tương ứng dựa vào loại tab
//           const containerId = `tab${
//             normalizedTabId.charAt(0).toUpperCase() + normalizedTabId.slice(1)
//           }Items`;
//           const container = document.getElementById(containerId);
  
//           // Hiển thị các hình ảnh trong container
//           if (container) {
//             container.innerHTML = tabData
//               .map(
//                 (item) => `
//                   <div class="col-md-3">
//                     <div class="item" data-item-id="${item.id}">
//                       <img src="../assets/images/clothes/${item.imgSrc_jpg}" alt="${item.name}" onclick="tryOn('${item.name}', '${normalizedTabId}')">
//                     </div>
//                   </div>
//                 `
//               )
//               .join("");
//           }
//         } else {
//           console.log("No items found for the given tabId:", tabId);
//         }
//       } catch (error) {
//         console.error("Error displaying items:", error);
//       }
//     }
  
//     window.tryOn = (itemName, tabId) => {
//       console.log("tryOn called with", itemName, "from", tabId);
//       const modelPart = document.querySelector(.${tabId.toLowerCase()});
//       const selectedItem = data.tabPanes.find(
//         (item) => item.name === itemName && item.type === tabId.toLowerCase()
//       );
//       console.log("Selected Item:", selectedItem);
//       modelPart.innerHTML = <img src="../assets/images/${selectedItem.imgSrc_jpg}" alt="${tabId}">;
//     };
  
//     document.querySelectorAll(".nav-link").forEach((tab) => {
//       tab.addEventListener("click", (event) => {
//         const tabId = event.target.innerText;
//         console.log("Tab clicked:", tabId);
//         displayItems(tabId, data);
//       });
//     });
//   });