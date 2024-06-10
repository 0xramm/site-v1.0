import socket
from concurrent.futures import ThreadPoolExecutor, as_completed
import webbrowser
import tkinter as tk
from tkinter import messagebox

def get_host_ip():
    """Get the local machine's IP address."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # doesn't even have to be reachable
        s.connect(('10.254.254.254', 1))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

def generate_ips(base_ip):
    """Generate 256 IP addresses by varying the last octet."""
    base_ip = base_ip.rsplit('.', 1)[0]  # Remove the last octet
    return [f"{base_ip}.{i}" for i in range(256)]

def try_connect(ip, port=8000):
    """Try to connect to a specific port on the given IP address."""
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(0.5)  # Set timeout to 0.5 seconds
    try:
        s.connect((ip, port))
        return ip
    except (socket.timeout, ConnectionRefusedError, OSError):
        return None
    finally:
        s.close()

def connect_to_ips(ips, port=8000, max_workers=20):
    """Try to connect to a specific port on a list of IP addresses using concurrency."""
    successful_ips = []
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_ip = {executor.submit(try_connect, ip, port): ip for ip in ips}
        for future in as_completed(future_to_ip):
            ip = future_to_ip[future]
            result = future.result()
            if result:
                successful_ips.append(result)
    return successful_ips

def open_browser(urls):
    """Open the default web browser for each URL in the list."""
    for url in urls:
        webbrowser.open(url)

def show_message(message):
    """Show a message box with the provided message."""
    root = tk.Tk()
    root.withdraw()
    messagebox.showinfo("Info", message, icon=messagebox.INFO)

if __name__ == "__main__":
    host_ip = get_host_ip()
    print(f"Host IP: {host_ip}")

    ip_range = generate_ips(host_ip)
    print(f"Generated IP range: {ip_range[0]} - {ip_range[-1]}")

    successful_ips = connect_to_ips(ip_range, 8000)
    if successful_ips:
        print(f"IPs with port 8000 open: {successful_ips}")
        urls = [f"http://{ip}:8000" for ip in successful_ips]
        open_browser(urls)
    else:
        print("No servers found in the Network.")
        show_message("No servers found in the Network.")