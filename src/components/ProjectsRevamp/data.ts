import { Project } from './types';

export const projects: Project[] = [
    {
        id: 'pastebin-lite',
        title: 'Pastebin Lite – Secure Text Sharing Web App',
        description: 'A secure, lightweight text sharing platform built for rapid information exchange with privacy in mind. Features expiration-based auto-deletion to ensure data hygiene and restricted access controls for sensitive content.',
        shortDescription: 'Secure text sharing with auto-deletion and access control.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        keyCapabilities: [
            'Expiry-based automatic deletion',
            'Restricted access (allowed users/recipients)',
            'Clean, minimal, responsive UI',
            'Production deployment on Vercel'
        ],
        links: {
            demo: 'https://pastebin-lite-rho.vercel.app'
        }
    },
    {
        id: 'enterprise-grc',
        title: 'Enterprise GRC Platform',
        description: 'A comprehensive Multi-Tenant Risk, Compliance & Audit System designed for enterprise scale. Manages the full GRC lifecycle including risks, controls, assessments, and audit findings with a microservices architecture.',
        shortDescription: 'Multi-tenant SaaS for Risk, Compliance & Audit management.',
        techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Elasticsearch', 'Kafka', 'LLMs'],
        keyCapabilities: [
            'Multi-tenancy & tenant isolation',
            'RBAC + ABAC authorization',
            'Declarative Rule Engine for auto-risk creation',
            'OCR + NLP pipelines for PII detection'
        ],
        details: {
            architecture: [
                'Microservices: Rule Engine, Workflow Engine, Search Service, Notification Service, Audit Log Service',
                'Security: SSO, JWT auth, Encryption at rest & in transit',
                'Tamper-evident audit logs'
            ],
            features: [
                'Full GRC lifecycle management',
                'Automated alerts & document classification',
                'Similarity search & auto-tagging'
            ]
        }
    },
    {
        id: 'rag-assistant',
        title: 'RAG-Based Document Intelligence Assistant',
        description: 'A high-performance RAG pipeline for enterprise document QA. Leverages semantic search and re-ranking to deliver context-aware responses from PDF, DOCX, CSV, and Excel files with ~85% improved accuracy.',
        shortDescription: 'Enterprise QA pipeline with semantic search & re-ranking.',
        techStack: ['FastAPI', 'Python', 'Ollama', 'Vector Database'],
        keyCapabilities: [
            'Chunking, embeddings, semantic search',
            'Re-ranking & context-aware response generation',
            'Multi-format support (PDF, DOCX, CSV, Excel)',
            'Achieved ~85% improvement in enterprise QA accuracy'
        ]
    },
    {
        id: 'ocr-summarization',
        title: 'OCR + AI Summarization Engine',
        description: 'An advanced processing engine converting structured and unstructured documents into actionable insights. Combines Tesseract OCR with hybrid LLM summarization techniques.',
        shortDescription: 'OCR & Hybrid LLM summarization for complex documents.',
        techStack: ['Python', 'Tesseract', 'LLMs'],
        keyCapabilities: [
            'OCR for structured & unstructured documents',
            'Noise reduction preprocessing',
            'Hybrid summarization (Extractive + Abstractive)'
        ]
    },
    {
        id: 'chat-with-data',
        title: 'ChatWithData – AI Visualization System',
        description: 'Interactive natural-language data analysis tool. Users can upload large datasets (CSV/Excel up to 10MB) and generate charts, statistical summaries, and insights via conversation.',
        shortDescription: 'Natural-language data analysis & auto-generated visualization.',
        techStack: ['Next.js', 'FastAPI', 'DeepSeek LLM'],
        keyCapabilities: [
            'Natural-language data analysis',
            'Auto-generated charts & insights',
            'Real-time dataset profiling',
            'Large file ingestion (up to 10MB)'
        ]
    },
    {
        id: 'second-brain',
        title: 'Second Brain – AI Knowledge System',
        description: 'A personal knowledge management system powered by offline LLMs. Features semantic search and memory recall to organize thoughts and tag content automatically.',
        shortDescription: 'AI-powered note management with offline reasoning.',
        techStack: ['Next.js', 'Ollama', 'Vector DB', 'Llama3', 'Mistral'],
        keyCapabilities: [
            'Intelligent note management',
            'Semantic search & auto-tagging',
            'Offline LLM reasoning (Llama3, Mistral, Gemma)'
        ]
    }
];
