import os
import shutil
import sys
from pathlib import Path

def collect_and_sort_videos(source_root):
    source_path = Path(source_root).resolve()
    current_dir = Path.cwd()
    
    mp4_files = []
    
    print(f"Searching recursively inside: {source_path}...")
    
    # Recursively walk the directory
    for root, dirs, files in os.walk(source_path):
        # Check if the current directory name is 'this'
        if Path(root).name.lower() == '1this':
            for file in files:
                if file.lower().endswith('.mp4'):
                    file_path = Path(root) / file
                    # Get the file modification time for chronological sorting
                    mtime = file_path.stat().st_mtime
                    mp4_files.append((mtime, file_path))
    
    if not mp4_files:
        print("No MP4 files found inside any 'this' directories.")
        return

    # Sort chronologically: oldest files first (ascending order of mtime)
    mp4_files.sort(key=lambda x: x[0])
    
    print(f"Found {len(mp4_files)} MP4 file(s). Copying in chronological order...")
    
    # Copy and sequentially rename
    for index, (mtime, file_path) in enumerate(mp4_files, start=1):
        prefix = f"{index:02d}"  # Creates 01, 02, 03, etc.
        new_filename = f"{prefix}_{file_path.name}"
        dest_path = current_dir / new_filename
        
        shutil.copy2(file_path, dest_path)
        print(f"[{prefix}] Copied: {file_path.relative_to(source_path)} -> {new_filename}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python collect_videos.py <path_to_search>")
        sys.exit(1)
    
    target_directory = sys.argv[1]
    if not os.path.isdir(target_directory):
        print(f"Error: '{target_directory}' is not a valid directory.")
        sys.exit(1)
        
    collect_and_sort_videos(target_directory)
