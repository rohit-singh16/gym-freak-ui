import { Component, h } from '@stencil/core';

@Component({
  tag: 'admin-dashboard',
  styleUrl: 'admin-dashboard.css',
  shadow: true,
})
export class AdminDashboard {
  products: Product[] = [];

  render() {
    return (
      <div>
        <header-section></header-section>
        <div class="admin-dashboard-container">
          <h2>Welcome, Admin</h2>

          <form onSubmit={this.handleAddProduct}>
            <div class="form-group">
              <label htmlFor="productName">Product Name:</label>
              <input type="text" id="productName" name="productName" required />
            </div>
            <div class="form-group">
              <label htmlFor="productDescription">Product Description:</label>
              <textarea id="productDescription" name="productDescription" required></textarea>
            </div>
            <div class="form-group">
              <label htmlFor="productPrice">Product Price:</label>
              <input type="number" id="productPrice" name="productPrice" required />
            </div>
            <div class="form-group">
              <label htmlFor="productImage">Product Image:</label>
              <input type="file" id="productImage" name="productImage" accept="image/*" required onChange={this.handleImagePreview} />
              {/* Display image thumbnail */}
              <img id="productImagePreview" src="#" alt="Product Preview" style={{ display: 'none', maxWidth: '100px', maxHeight: '100px' }} />
            </div>
            <button type="submit">Add Product</button>
          </form>

          <div class="product-list">
            {this.products.map(product => (
              <div class="product" key={product.id}>
                <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button onClick={() => this.handleUpdateProduct(product)}>Update</button>
                <button onClick={() => this.handleDeleteProduct(product)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
        <subscription-section></subscription-section>
        <footer-section></footer-section>
      </div>
    );
  }

  handleAddProduct(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      name: formData.get('productName') as string,
      description: formData.get('productDescription') as string,
      price: parseFloat(formData.get('productPrice') as string),
      imageUrl: URL.createObjectURL(formData.get('productImage') as File),
    };

    this.products.push(newProduct);
    form.reset();

    // Display image thumbnail
    const imagePreview = document.getElementById('productImagePreview') as HTMLImageElement;
    imagePreview.src = newProduct.imageUrl;
    imagePreview.style.display = 'block';
  }

  handleImagePreview(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const imagePreview = document.getElementById('productImagePreview') as HTMLImageElement;
      imagePreview.src = URL.createObjectURL(file);
      imagePreview.style.display = 'block';
    }
  }

  handleUpdateProduct(_product: Product) {
    // Add logic to handle updating a product
  }

  handleDeleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
